import React from 'react';
import {View,StyleSheet} from "react-native"; 
import {Button} from "@material-ui/core"
import {handleAddItem, handleRemoveItem} from "../store/Items/action";
import {useDispatch} from "react-redux";

function Counter(item) {
    const dispatch = useDispatch();
    const addItem = () =>{
        dispatch(handleAddItem(item.item));
    };
    const removeItem = () =>{
        dispatch(handleRemoveItem(item.item));
    };
    return (
        <View style={styles.counter}>
            <View>
                <Button variant="outlined" color="primary" onClick={addItem}>+</Button>
            </View>
            <View>
            {item.item.qty}
            </View>
            <View>
            <Button variant="outlined" color="secondary" onClick={removeItem}>-</Button>
            </View>
        </View>
    )
}

export default Counter;

const styles =StyleSheet.create({
counter:{
    flexDirection: "row"
}
});
