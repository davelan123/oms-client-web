import { Button } from '@material-ui/core';
import {StyleSheet,View} from "react-native";
import React from 'react';

function OrderSummary(items) {
    const netAmt = items.items.reduce(function(result,item) {
        return result + item.price*item.qty;
       }, 0);
    return (
        <View style={styles.order_summary}>
            <View style={styles.order_summary_col}>
                Order Total                
            </View>
            <View style={styles.order_summary_col}>                
                $ {netAmt}
            </View>
            <View style={styles.order_summary_col}>                
                <Button color="primary" variant="contained" >Place Order</Button>
            </View>
        </View>
    )
}

export default OrderSummary;


const styles = StyleSheet.create(
    {
        order_summary:{
            padding:5,
            flexDirection:"row",
            justifyContent:"space-evenly"
        },
        order_summary_col:{
            flexDirection:"row"
        }
    }
)