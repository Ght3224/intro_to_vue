var app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue!",
    reply: "What up?",
    response_back: "Nothing",
    question: "How's Randy?", 
    },
    methods: {
      changeMessage: function() {
        this.message = "Goodbye";
        console.log("III")
      }
    }
});