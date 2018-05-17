const userData=require('./userData.json')

module.exports={
    getAll:(req, res)=>{
        var users=[]
        if(req.query.favorites)users=userData.filter(user=>user.favorites.includes(req.query.favorites));
        else if (req.query.age)users=userData.filter(user=>user.age<req.query.age)
        else if(req.query.lastname)users=userData.filter(user=>user.last_name===req.query.lastname)
        else if (req.query.email)users=userData.filter(user=>user.email==req.query.email)
        else users=userData.slice();
         res.status(200).send(users)
        },
    getOne:(req,res)=>{
        const {id}=req.params;
        console.log("ID",id)
        var myUser=userData.filter(user=>user.id==id)
        console.log("myUser", myUser)
        if(myUser.length>0) res.status(200).send(myUser[0])
        else res.status(404).json(null)
    },
    getAdmins:(req, res)=>{
        var users=userData.filter(user=>user.type=="admin")
        res.status(200).send(users)
    },
    noneAdmin:(req, res)=>{
        var users=userData.filter(user=>user.type!="admin")
        res.status(200).send(users)
    },
    typeUsers:(req, res)=>{
        var users=userData.filter(user=>user.type==req.params.userType)
        res.status(200).send(users)
    },
    updateUser:(req, res)=>{
        userData.forEach((user,i,arr)=>user.id==req.params.userId? arr[i]=req.body: '')
        res.status(200).send(userData)
    },
    createUser:(req, res)=>{
       var newUser=req.body;
       newUser.id=userData[userData.length-1].id+1
       userData.push(newUser);
       res.status(200).send(userData);
    },
    deleteUser:(req, res)=>{
        var id=userData.findIndex(user=>user.id==req.params.id);
        userData.splice(id, 1);
        res.status(200).send(userData);
    }

       
       
}

