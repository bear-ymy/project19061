import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	  todos:[]
  },
  getters:{
	  active:function(state){
		  return state.todos.filter(function(item,index,arr){
			  return item.comp==false
		  })
	  },
	  completed:function(state){
		  return state.todos.filter(function(item,index,arr){
			  return item.comp==true
		  })
	  }
  },
  
  mutations: {
	  increment (state,todo) {
			todo.count=state.todos.length
	        state.todos.push(todo)
	      }
  },
  actions: {
	  
  }
})
