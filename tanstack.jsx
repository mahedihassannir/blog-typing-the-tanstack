

// hey if you want to use tanstack query you want to need install the tanstack query and you need to set up the tanstack query in the main.jsx file and importing and set it on the top of provider

// installotion part is done


// {

// }

const useCart = () => {
    const { user } = useContext(contexM);

    // first get the user from the contex 


    // here is the refatch method and data:cart
    const { refetch, data: cart = [] } = useQuery({

        queryKey: ['Cart', user?.email],

        queryFn: async () => {

            const res = await fetch(` http://localhost:5000/carts?email=${user?.email}`)

            return res.json();

        },
    })


    return [cart, refetch] // return the values 

}
export default useCart;


// then got to the server side and make an get api 


app.get("users", async (req, res) => {

    const email = req.query.email

    if (!email) {
        res.send([])
    }

    const query = { email: email }


    const result = await db.find(query).toAttay()
    res.sen(result)



})

// thats it for the email  and this system is for only for the getting per user informatin

//  this api is for only get user by the email


app.get("/users", async (req, res) => {
    const id = req.params.email

    const filter = { _id: new ObjectId(id) }

    const result = await db.fingOne(filter)

    res.send(result)

})