import { TextField } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme)=>({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    containerInputs: {
        marginBottom: "10px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        marginLeft: "-20px",
        marginRight: "-20px",
    },
    input: {
        paddingLeft: "10px",
        paddingRight: "10px",
        marginBottom: "30px",
        '& > *': {
            paddingLeft:"10px",
            paddingRight: "10px",
            paddingTop: "10px",
            paddingBottom: "5px",
        }
    }
}));

function Contacts() {
    const classes = useStyles();
    const inputs = useSelector(state => state.contactsVault.inputs);
    const dispatch = useDispatch();

    const changeInputValue =  (e) => {
        switch (+e.target.id.substring(15,16)){
            case 0:
                return dispatch(setFirstName(e.target.value));
            case 1:
                return dispatch(setLastName(e.target.value));
            case 2:
                return dispatch(setCountry(e.target.value));
            case 3:
                return dispatch(setCity(e.target.value));
            case 4:
                return dispatch(setPhone(e.target.value));
            default:
                break;            
        }
    }

    return (
        <div className={classes.root}>
            <form className={classes.containerInputs} noValidate autoComplete="off">
                {
                    inputs.map(({id,label=""}) => {
                        return (
                            <TextField
                                key={}
                                className={classes.input}
                                id={`outlined-basic ${id}`}
                                label={label}
                                variant="outlined"
                                onChange={changeInputValue}
                            >                                
                            </TextField>
                        )
                    })
                }
            </form>
        </div>
    );
}

export default Contacts;
