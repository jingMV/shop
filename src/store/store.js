import Vue from 'vue'
import Vuex from 'vuex'
import { Script } from 'vm';

Vue.use(Vuex)

export const store = new Vuex.Store({
    
    state: {
        /*NEW ARRIVAL*////////////////////////////////////////
        bluecaps: [
            { inStock: true, quaN: 0, Title: 'Blue Cap', Id: 1001, Image: require('../assets/newArrival/arrival-1.jpg'), Price: 1100, Color: 'blue', description: '-100% Cotton, -Adjustable, -Quality Check', name: null, textarea: null, rating: null,}
        ],
        bluecapNY: [
            { inStock: true, quaN: 0, Title: 'Blue Cap NY', Id: 1002, Image: require('../assets/newArrival/arrival-2.jpg'), Price: 1100, Color: 'blue', description: '-100% Cotton, -Adjustable, -Quality Check', name: null, textarea: null, rating: null,}
        ],
        shoePlay: [
            { inStock: true, quaN: 0, Title: 'Shoe Play', Id: 1003, Image: require('../assets/newArrival/arrival-3.jpg'), Price: 2500, Color: 'White', description: '-Cotton, -Fashion, -Quality Check', name: null, textarea: null, rating: null,}
        ],
        hBoots: [
            { inStock: true, quaN: 0, Title: 'H-Boots', Id: 1004, Image: require('../assets/newArrival/arrival-4.jpg'), Price: 4100, Color: 'Brown', description: '-Leather, -Quality Check', name: null, textarea: null, rating: null,}
        ],
        shoeAC: [
            { inStock: true, quaN: 0, Title: 'Shoe AC', Id: 1005, Image: require('../assets/newArrival/arrival-5.jpg'), Price: 4600, Color: 'Green', description: '-Sport, -Quality Check', name: null, textarea: null, rating: null,}
        ],
        whiteAdi: [
            { inStock: true, quaN: 0, Title: 'White Adi', Id: 1006, Image: require('../assets/newArrival/arrival-6.jpg'), Price: 6100, Color: 'White', description: '-Fashion, -Quality Check', name: null, textarea: null, rating: null,}
        ],
        wPairShoe: [
            { inStock: true, quaN: 0, Title: 'W-Pair Shoe', Id: 1007, Image: require('../assets/newArrival/arrival-7.jpg'), Price: 5100, Color: 'Green and Brown', description: '-Fashion, -Quality Check', name: null, textarea: null, rating: null,}
        ],
        nPink: [
            { inStock: true, quaN: 0, Title: 'N-Pink', Id: 1008, Image: require('../assets/newArrival/arrival-8.jpg'), Price: 5000, Color: 'Pink', description: '-Sports, -Fashion, -Quality Check', name: null, textarea: null, rating: null,}
        ],

        /*BEST*/////////////////////////////////////////

        nikeRed: [
            { inStock: true, quaN: 0, Title: 'Nike Red', Id: 1009, Image: require('../assets/image/img1.png'), Price: 10000, Color: 'Red', description: '-Sports, -Quality Check', name: null, textarea: null, rating: null,}
        ],

        shoeGreen: [
            { inStock: true, quaN: 0, Title: 'Shoe Green', Id: 1010, Image: require('../assets/image/img2.png'), Price: 9000, Color: 'Green', description: '-Sports, -Fashion, -Quality Check', name: null, textarea: null, rating: null,}
        ],

        nikeBlue: [
            { inStock: true, quaN: 0, Title: 'Nike Blue', Id: 1011, Image: require('../assets/image/img3.png'), Price: 11000, Color: 'Blue', description: '-Sports, -Fashion, -Quality Check', name: null, textarea: null, rating: null,}
        ],

        allstar: [
            { inStock: true, quaN: 0, Title: 'Allstar', Id: 1012, Image: require('../assets/image/img4.png'), Price: 8000, Color: 'Cream', description: '-Fashion, -Quality Check', name: null, textarea: null, rating: null,}
        ],

        nikeGrey: [
            { inStock: true, quaN: 0, Title: 'Nike Grey', Id: 1013, Image: require('../assets/image/img5.png'), Price: 11000, Color: 'Grey', description: '-Sports, -Quality Check', name: null, textarea: null, rating: null,}
        ],
        converseShoe: [
            { inStock: true, quaN: 0, Title: 'Converse Shoe', Id: 1014, Image: require('../assets/image/img6.png'), Price: 9000, Color: 'Red', description: '-Fashion, -Quality Check', name: null, textarea: null, rating: null,}
        ],
        
        
    },

    getters: {

    },

    mutations: {
        /*NEW ARRIVAL*////////////////////////////////////
        addQuantity: state => {
            state.bluecaps.map((item) => {
                item.quaN += 1
            })
        },
        reduceQuantity: state => {
            state.bluecaps.map((item) => {
               if (item.quaN > 0) {
                   item.quaN -= 1
               }
            })
        },

        addQuantityNY: state => {
            state.bluecapNY.map((item) => {
                item.quaN += 1
            })
        },
        reduceQuantityNY: state => {
            state.bluecapNY.map((item) => {
               if (item.quaN > 0) {
                   item.quaN -= 1
               }
            })
        },

        addQuantitySP: state => {
            state.shoePlay.map((item) => {
                item.quaN += 1
            })
        },
        reduceQuantitySP: state => {
            state.shoePlay.map((item) => {
               if (item.quaN > 0) {
                   item.quaN -= 1
               }
            })
        },

        addQuantityHB: state => {
            state.hBoots.map((item) => {
                item.quaN += 1
            })
        },
        reduceQuantityHB: state => {
            state.hBoots.map((item) => {
               if (item.quaN > 0) {
                   item.quaN -= 1
               }
            })
        },

        addQuantityAC: state => {
            state.shoeAC.map((item) => {
                item.quaN += 1
            })
        },
        reduceQuantityAC: state => {
            state.shoeAC.map((item) => {
               if (item.quaN > 0) {
                   item.quaN -= 1
               }
            })
        },

        addQuantityAdi: state => {
            state.whiteAdi.map((item) => {
                item.quaN += 1
            })
        },
        reduceQuantityAdi: state => {
            state.whiteAdi.map((item) => {
               if (item.quaN > 0) {
                   item.quaN -= 1
               }
            })
        },

        addQuantityWP: state => {
            state.wPairShoe.map((item) => {
                item.quaN += 1
            })
        },
        reduceQuantityWP: state => {
            state.wPairShoe.map((item) => {
               if (item.quaN > 0) {
                   item.quaN -= 1
               }
            })
        },

        addQuantityNP: state => {
            state.nPink.map((item) => {
                item.quaN += 1
            })
        },
        reduceQuantityNP: state => {
            state.nPink.map((item) => {
               if (item.quaN > 0) {
                   item.quaN -= 1
               }
            })
        },

        /*BEST*/////////////////////////////////////

        addQuantityNR: state => {
            state.nikeRed.map((item) => {
                item.quaN += 1
            })
        },
        reduceQuantityNR: state => {
            state.nikeRed.map((item) => {
               if (item.quaN > 0) {
                   item.quaN -= 1
               }
            })
        },

        addQuantitySG: state => {
            state.shoeGreen.map((item) => {
                item.quaN += 1
            })
        },
        reduceQuantitySG: state => {
            state.shoeGreen.map((item) => {
               if (item.quaN > 0) {
                   item.quaN -= 1
               }
            })
        },

        addQuantityNB: state => {
            state.nikeBlue.map((item) => {
                item.quaN += 1
            })
        },
        reduceQuantityNB: state => {
            state.nikeBlue.map((item) => {
               if (item.quaN > 0) {
                   item.quaN -= 1
               }
            })
        },

        addQuantityAL: state => {
            state.allstar.map((item) => {
                item.quaN += 1
            })
        },
        reduceQuantityAL: state => {
            state.allstar.map((item) => {
               if (item.quaN > 0) {
                   item.quaN -= 1
               }
            })
        },

        addQuantityNG: state => {
            state.nikeGrey.map((item) => {
                item.quaN += 1
            })
        },
        reduceQuantityNG: state => {
            state.nikeGrey.map((item) => {
               if (item.quaN > 0) {
                   item.quaN -= 1
               }
            })
        },

        addQuantityCS: state => {
            state.converseShoe.map((item) => {
                item.quaN += 1
            })
        },
        reduceQuantityCS: state => {
            state.converseShoe.map((item) => {
               if (item.quaN > 0) {
                   item.quaN -= 1
               }
            })
        },
        //add favorite
    },
    actions: {},
});