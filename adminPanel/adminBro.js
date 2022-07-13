const AdminBro = require('admin-bro')
const AdminBroMongoose = require('admin-bro-mongoose');
const AdminBroExpress = require('admin-bro-expressjs')
const Seller = require('../Modals/Seller')
const Product = require('../Modals/Product')


AdminBro.registerAdapter(AdminBroMongoose);



const AdminBroOptions = {
    resources: [Seller, Product],
    rootPath: '/admin',
}


const adminBro = new AdminBro(AdminBroOptions);
const routerAdminBro = AdminBroExpress.buildRouter(adminBro);


module.exports = routerAdminBro