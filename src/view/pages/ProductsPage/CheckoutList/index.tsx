import { Divider, Grid, List, ListItem, ListItemText } from "@mui/material"
import { IProduct } from '..';

interface IPropsCheckoutList {
  cart: IProduct[] 
}

const CheckoutList = ({ cart }: IPropsCheckoutList) => {

    const GetItemList = () => (
      <>
        {cart.map(item => {
            return (
                <ListItem key={item.id}>
                    <Grid container>
                        <Grid item lg={6} sx={{ textAlign: "left" }}>
                            <ListItemText primary={item.title} />
                        </Grid>
                        <Grid item lg={2}>
                            <ListItemText primary={item.quantity} />
                        </Grid>
                        <Grid item lg={2}>
                            <ListItemText primary={item.price} />
                        </Grid>
                        <Grid item lg={2} sx={{ textAlign: "right" }}>
                            <ListItemText primary={item.price * (item?.quantity || 1)} />
                        </Grid>
                    </Grid>
                </ListItem>
            )
        })}
      </>
    )

    const GetSumListItem = () => {
        const sum = cart.map(item => item.price * (item.quantity || 1))?.reduce((prev, next) => prev + next, 0)
        return (
            <ListItem >
                <Grid container>
                    <Grid item lg={6} sx={{ textAlign: "left" }}>
                        <ListItemText primary={"Total"} />
                    </Grid>
                    <Grid item lg={2}>
                    </Grid>
                    <Grid item lg={2}>
                    </Grid>
                    <Grid item lg={2} sx={{ textAlign: "right" }}>
                        <ListItemText primary={sum} />
                    </Grid>
                </Grid>
            </ListItem>
        )
    }

    return (
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <GetItemList />
            <Divider />
            <GetSumListItem />
        </List>
    )

}

export default CheckoutList
