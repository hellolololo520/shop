
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);


import CoreOrderManager from "./components/listers/CoreOrderCards"
import CoreOrderDetail from "./components/listers/CoreOrderDetail"

import SupDeliveryManager from "./components/listers/SupDeliveryCards"
import SupDeliveryDetail from "./components/listers/SupDeliveryDetail"
import SupInventoryManager from "./components/listers/SupInventoryCards"
import SupInventoryDetail from "./components/listers/SupInventoryDetail"

import Manager from "./components/listers/Cards"
import Detail from "./components/listers/Detail"

import MyViewView from "./components/MyViewView"
import MyViewViewDetail from "./components/MyViewViewDetail"

export default new Router({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes: [
            {
                path: '/cores/orders',
                name: 'CoreOrderManager',
                component: CoreOrderManager
            },
            {
                path: '/cores/orders/:id',
                name: 'CoreOrderDetail',
                component: CoreOrderDetail
            },

            {
                path: '/sups/deliveries',
                name: 'SupDeliveryManager',
                component: SupDeliveryManager
            },
            {
                path: '/sups/deliveries/:id',
                name: 'SupDeliveryDetail',
                component: SupDeliveryDetail
            },
            {
                path: '/sups/inventories',
                name: 'SupInventoryManager',
                component: SupInventoryManager
            },
            {
                path: '/sups/inventories/:id',
                name: 'SupInventoryDetail',
                component: SupInventoryDetail
            },

            {
                path: '//',
                name: 'Manager',
                component: Manager
            },
            {
                path: '///:id',
                name: 'Detail',
                component: Detail
            },

            {
                path: '/dashboardServices/myViews',
                name: 'MyViewView',
                component: MyViewView
            },
            {
                path: '/dashboardServices/myViews/:id',
                name: 'MyViewViewDetail',
                component: MyViewViewDetail
            },


    ]
})
