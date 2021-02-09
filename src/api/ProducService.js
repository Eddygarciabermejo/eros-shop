import React from 'react';
import BaseService from "./BaseService";
import axios from "axios";


export default class ProductService extends React.Component {

    static getClassUrl() {
        return '';
    }

    static getUrl() {
        return `${BaseService.getBaseUrl()}${ProductService.getClassUrl()}`;
    }

    static getCategoryGenero() {
        return axios.get(`${ProductService.getUrl()}genero-categorias`).then(res => {
            if (res.status === 200) {
                return res.data;

            }
        })
    }


}
