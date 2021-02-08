import React from 'react';
import BaseService from "./BaseService";
import axios from "axios";


export default class AdminService extends React.Component {

    static getClassUrl() {
        return '';
    }

    static getUrl() {
        return `${BaseService.getBaseUrl()}${AdminService.getClassUrl()}`;
    }

    static getHeaders() {
        return axios.get(`${AdminService.getUrl()}headers`).then(res => {
            if (res.status === 200) {
                return res.data;

            }
        })
    }

    static getFooters() {
        return axios.get(`${AdminService.getUrl()}footers`).then(res => {
            if (res.status === 200) {
                return res.data;

            }
        })
    }
}
