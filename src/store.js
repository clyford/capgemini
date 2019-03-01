import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isNavMobileOn: false,
    employee: []
  },
  getters: {
    employee: (state) => {
      return state.employee;
    },
    employeeSecs: (state) => {
      return state.employee.filter(s => {
        
        delete s.id;
        delete s.creationDate
        delete s.city.id
        delete s.organization.id
        return s
      });
    },
    navMobileStatus(state) {
      return state.isNavMobileOn;
    }
  },
  mutations: {
    toggleMobileNav(state) {
      state.isNavMobileOn = !state.isNavMobileOn;
      console.log("navmobile active ? =>", state.isNavMobileOn);
    },
    setEmployee(state, data) {
      console.log("je suis le commit", data)
      state.employee = data;
      console.log("ici", state)
    }
  },
  actions: {
    addEmployee(ctx) {
      // return console.log(ctx);
      return new Promise((resolve, reject) => {
        axios.get("http://localhost:8181/employee/post")
          .then(res => {
            ctx.commit("addSalaried", res.data);
            resolve({ msg: "ok", data: res.data });
          })
          .catch(err => {
            reject({ msg: "pas ok", error: err });
          })
      })
    },
    getEmployees(ctx) {
      console.log("je suis le dispatch")
      return axios.get("http://localhost:8181/employee/getAll").then(response => {
          ctx.commit("setEmployee", response.data)
          console.log(response.data)
      }).catch(error => {
            console.error(error);
        })
    }
  }
})