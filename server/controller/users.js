const mongoose = require("mongoose");

const User = mongoose.model('User');
const Bike = mongoose.model('Bike');

module.exports = {
    
    register: (req, res) => {
        User.findOne({email: req.body.email})
        .then( user => {
            if ( user ) {
                console.log('User already exist');
                res.status(401);
                res.json(false)
            } else {
                let newUser = new User(req.body);
                console.log('Serevr user', newUser );
                newUser.save()
                    .then(() => {
                       res.json(true)
                    })
                    .catch(err => {
                        console.log("User save error", err)
                        res.status(500).json(err)
                    })
            }
        })
        .catch( err => {
            console.log('err',err)
            res.status(401);
            res.json(false);
        })

    },

    login: (req, res) => {
		User.findOne( {email: req.body.email , password: req.body.password} )
			.then(user => {
			if(user) {
                console.log('Email exist');
					req.session.user = user
					res.json(true)
				} else {
                    console.log('Email does not exist');
                    res.status(401);
                    res.json(false);
				}
			})

		
    },
    
    logout: (req, res) => {
        req.session.destroy();
        res.redirect('/')
    },

    addbike: (req , res) => {
        console.log('i am inside bike db');
        console.log(req.session.user);
        console.log(req.session.user._id);
        User.findOne( { _id: req.session.user._id} )
        .then( (user) => { 
            let myuser = user
            console.log(user)
            let new_bike= new Bike(req.body);
            new_bike.userid = req.session.user._id;
            console.log(req.session.user);
            console.log('user bikes: ', myuser.bikes);
            myuser.bikes.push(new_bike);
            new_bike.save()
            .then( () => { myuser.save();console.log('Bike created'); res.json(true) })
            .catch( err => {res.status(400) ; res.json(false)} )
        })
        .catch(err => {
            res.status(400)
            res.json(false)
        })     
        
    },

    getAllBikes: (req, res) => {
    console.log('i am inside get all bike');
    Bike.find({})
    .then(bikes => {
        var userid = req.session.user._id
        res.json( {bikes : bikes, userid : userid} )})
        .catch(err => {res.json(400); res.json(false)} )
    },

    getAllMyBikes: (req, res) => {
        console.log('i am inside MY bike');
        User.findOne( { _id: req.session.user._id} ).populate('bikes').exec()
        .then( (user) => { let mybikes = user.bikes; res.json(mybikes)})
        .catch( (err) => { res.status(400),res.json(false)})
        
    },

    update: (req,res ) => {
        console.log('i am inside update bike');
        console.log(req.body)
        // Bike.findOne({_id: req.body._id })
        //    .then( ( bike ) => { 
        //        cosole.log(bike)
        //        bike.title = res.body.title;
        //        bike.description = res.body.description
        //        bike.price = res.body.price
        //        bike.location = res.body.location 
        //        bike.url = res.body.utl
        //        bike.save()
        //        res.json(true)})
        //     .catch( err => { res.status(400); res.json(false)});

        // Bike.find({_id: req.body._id }, function (err , bike) {
        //     bike.title = res.body.title;
        //            bike.description = res.body.description
        //            bike.price = res.body.price
        //            bike.location = res.body.location 
        //            bike.url = res.body.utl
        //            bike.save(function (err) {
        //             if(err) {
        //                 console.error('ERROR!');
        //             }
        //         });
        // })
    } ,

    delete: (req,res) => {
        console.log('I am inside delete',req.body.id);
        Bike.deleteOne({_id: req.body.id})
        .then( () => res.json(true))
        .catch( err => console.log('Server delete err:',err))
    }


}


        
        

    

