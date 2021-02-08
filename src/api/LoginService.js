import React from 'react';
import BaseService from "./BaseService";
import axios from "axios";


export default class loginService extends React.Component {

    static getClassUrl() {
        return '';
    }

    static getUrl() {
        return `${BaseService.getBaseUrl()}${loginService.getClassUrl()}`;
    }


}
