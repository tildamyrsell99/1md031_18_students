var socket = io();
var vm = new Vue({
    el: "#main",
    data: {
        items: food,
        orderburgers: [],
        orders: {},
        details: { x: 0, y: 0 },
        CustomerArray: []
    },

    // Skapa socket
    created: function() {
        socket.on('initialize', function (data) {
            this.orders = data.orders;
        }.bind(this));

        socket.on('currentQueue', function (data){
            this.orders = data.orders;
        }.bind(this));
    },

    methods: {
        buttonClicked: function () {
            console.log("Beställningen lagd")
            this.CustomerArray = customerArray();
            console.log(this.CustomerArray)
            this.checkedBurger = getCustomerInformation();
            console.log(this.checkedBurger)
            this.addOrder();
        },

        getNext: function () {
            var lastOrder = Object.keys(this.orders).reduce(function (last, next) {
                return Math.max(last, next);
            }, 0);
            return lastOrder + 1;
        },
        addOrder: function (event) {
            console.log("Detta är addOrder")
            socket.emit("addOrder", {
                orderId: Math.floor(Math.random() * 100), //this.GetNext(),
                details: this.details,
                orderItems: this.checkedBurger,
                orderInformation: this.customerArray
            });
        },
        displayOrder: function (event) {
            console.log("Detta är displayOrder")
            console.log(event)
            var offset = {
                x: event.currentTarget.getBoundingClientRect().left,
                y: event.currentTarget.getBoundingClientRect().top
            };
            this.details = {
                x: event.clientX - 10 - offset.x,
                    y: event.clientY - 10 - offset.y
            },
            console.log(this.details.x)
            console.log(this.details.y)
        }
    }
})

    