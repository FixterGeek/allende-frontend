import React from 'react';
import { Button, Modal, Icon, Table, Card } from 'antd';
import toastr from 'toastr';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as productsActions from '../../../../redux/actions/productsActions'
import {ModalForm} from "./ModalForm";

class AdminProducts extends React.Component{

  state = {
    products: [],
    visible: false,
    columns: [
      { title: 'ID', dataIndex: 'id', align: 'center', width: 150 },
      { title: 'Nombre', dataIndex: 'name', align: 'center', width: 250 },
      { title: 'Precio', dataIndex: 'price', align: 'center', width: 100,
        render: (i) => `$ ${i}`
      },
      { title: 'Imagen', dataIndex: 'image', align: 'center', width: 300,
        render: () => <img src='https://s3.amazonaws.com/kichink/items_865660_246443_20160104113504_b.jpg' alt='imagen' width='10%' />,
      },
      { title: 'Stock', dataIndex: 'stock', align: 'center', width: 100 },
      { title: 'Borrar',
        dataindex: 'action',
        width: 100,
        align: 'center',
        render: (i, obj) => <a style={{ color: 'red' }} onClick={()=>this.showModal(obj)}> <Icon type="delete" /> </a>
      }
    ],
  };

  showModal = () => {
    this.setState({visible: true});
  };

  handleCancel = () => {
    this.setState({visible: false});
  };

  handleOk = () => {
    const {products, toDelete} = this.state;
    const arr = products.filter((product, i) => {
      return product.id !== toDelete.id
    });
    console.log(toDelete);
    toastr.success(`${toDelete.name} Borrado` );
    this.setState({products: arr, visible: false});
  };

  render(){
    const {visible, columns} = this.state;
    const {products, fetched} = this.props;
    if(!fetched)return <p>loading...</p>
    console.log(this.state);
    return(
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexGrow: '1' }}>
        <Card title="Productos" style={{margin:'20px', width: '80%'}}>
          <Button onClick={this.showModal} type="primary" style={{marginBottom: 20}}>Crear Nuevo Producto</Button>
          <Table rowKey="name"  columns={columns} dataSource={products} style={{width: '100%', maxHeight:"100vh"}} />
        </Card>
        <Modal visible={visible} title="Crear nuevo producto" onOk={this.handleOk} onCancel={this.handleCancel}
          footer={[
            <Button type='danger' key="cancel" onClick={this.handleCancel}>Cancelar</Button>,
            <Button type='primary' key="submit" onClick={this.handleOk}>Crear producto</Button>
          ]}
        >
          <ModalForm/>
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  products: state.products,
  fetched: state.products!==undefined
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(productsActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminProducts);