import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  test: {
    textAlign: "center",
  },
  root: {},
  container: {
    textAlign: "center",
    flexDirection: "row",
  },
  payment: {
    flex: "0 1 40%",
    boxShadow: "1px 1px 4px rgba(0,0,0,0.5)",
    borderRadius: "10px",
    marginBottom: "15px",
    marginRight: "10px",
    paddingRight: "10px",
    paddingLeft: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

function PaymentChoose() {
  const classes = useStyles();
  const paymentMethod = useSelector(
    (state) => state.paymentVault.paymentMethod
  );
  const dispatch = useDispatch();
  const handleChange = (event) => {
    dispatch(setPaymentMethod(event.target.value));
  };
  return (
    <div className={classes.test}>
      <FormControl className={classes.root} component="fieldset">
        <RadioGroup
          className={classes.payment}
          aria-label="gender"
          name="gender1"
          value={paymentMethod}
          onChange={handleChange}
        >
          <div className={classes.payment}>
            <FormControlLabel
              value="Visa"
              control={<Radio />}
              label="Visa"
            ></FormControlLabel>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQoAAAC+CAMAAAD6ObEsAAAAkFBMVEX///8aH3EAAGeZmrYABmsAAGkOFW1fYpYUGm8YHXAAAGU4O4ESGG8ME23P0N8AAGMACmsGD2zCw9X39/qwsckADWzd3ujW1uLp6fBvcZ5SVY3w8PWgor6Agqi4uc5maJktMXqMjbB4eqRGSYamqMKVlrZXWo89QIK/wNMqLnk0OH8jKHa0tMpMT4qRkrF7fKR4eKGPAAAIo0lEQVR4nO2b6XbiOBCFQUFgO2bfl0DoDiEDWd7/7SYEsHVLJeCcxu45c+7305ZtLaVa5UqFEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhJD/J/Px8uVh/fS0fnhZjid/uzdnlg9BFuPwY33R9vN4efSpXQUm71+7obG21hkOOzVrjd03FuN++FPjBbxz+UfDvcS+bWxNx5ptK/TYsg1Nzep4eQGX7d5/bmZtN4qrDnFUtyaa9vTZ6D1j/+zv+4xbobV5taaTVlXSZBF47AOfSE4CtGq6V4dP+FB/E5k6TEM+H932i/adRSK6FtcuCNCf01pvk5o6G3Giy8XIwojS7ek6rrd9h4deulafhx/MSPlOL/GeMBe27V0YbbZJR+lo+qg2X3eglR0cL09wrIk7usmHuTAR1TjVVnvnL9D5W0UyWsfW/7IuFjHu9s7pcs/CZeM80bLN6iVSTQf0jN+w++vuI9cYPJpIfLmzUdotsYud9en6JwhLfZY/8d6+JBLuO1xe68qcbZWGRdCriq/XG0qrGTZKzq4BKtNObkvf/D0vsIqRHGlbKraF6k2H+T8oF9E/fhuhEprZbNVQa/ayBy6qieMAFU9LaKQTJmjh781Y7E8zv9ZFcx7yCB9tZ6NTtJ+cCt8FqfRTdQJtyMDfHyH92UBzqtDFXG4GqDWb5+sPcP10N202m/XM+Gr7cKA89k1zVdDAfV6wB/4iCL2eN3jqQpen5+ueHUhtEn2sptPX3bff3T1MR01Z6q0uS9GuqJF7TLDn/iIIvZ6rsWdQM9kUibn99ttmg2zvjAdf1aQTKQpgnKgzoW7ZotjBiCJpvITSzO38HG9kbqHQFFFTDnu02bf94U1DjoiyZYviF8i5Z7w2NehY7lK2hNY8XZ60USY0W1F5867Mg156TXN1imGJAi2d/j0ITfqR3VjAc9mWFq+7dSAbd2IDxrtwhLIQTr9QmiZ3jaZ6WCpNrxZ2KbgzHoMW0gxvUaDq7n7BzQYMOE7zO7Eeln7Bfrs1snxzZ9wO9u67k/ISX2gUnS1Q8ZRm7TN0J9MhmMPwkhgBXO8mjtClt75mKYo3dJXqrt6ELfxtF/MFCoWlwhLENxkAcFy/5fJp6M6mFroVw/xC2gFDFNfpCIWlKGOH6bsh4wBDT1qVd3ee6693HOwVfoOycINGoTTdbIYIS7OVe0Dje5CLxjUnqT90FiN6FlISd8sKTqXSd1MJuPEhxzUMhKUtP//StA+XOwAO6iFl0gd7mtxohe4Arr0jj3MRnzip2RHeysPSiuYr2fTiLnl0JezH/EKQKJKmRdJHZym34xhjgiMaCksDaYfYVsN2oOWGH8dUH2giYd8LBfe9yVYYAy6wi6Gw9Hti9RRWZB5DSRjYhkfRA6umJkILYgMLmZk/se1hywbC0gMLJVv7M6Jkquo/THrZHx07AaErLaknx5wlE9BFcNO4wbD0h1c1M/fNcKg5GbCjzhEHTHXhxZAcMGaZ9yCUpnE3eyAsPbETvkVG3FbcJbAW5680QG+WUAw5Awr7nLJYhLSpf09mmrbSuciH6sWZUFrISkUL9w3dqXyoOODD8XG7ipwO+gbocHS9QGMV0Bff75G+I+jsLDMEBt7LJxUI5r2P6TbcAzHm1ap6WJqzaIfS3hbrXSNI5GX+LCojU57e7EMh+Lg1p7DhUUYvVUvPTbahakgCHgYk0Q5O94lH0JulFUOElvqR0jkWfBJQ4heqpTmDVE/SRbHTCHWzU2ED86VlyIvixXNpMHEtvBwRloZCx01NnQzXgUf96+S84PslFkNwx8bDvsxtCXMWCks9Bk2l0OOGdaCb3QkH9aXVL4uivxehICpSN8Y40A2EpQqfxsvqO1lwjARdcZmDr5OUVwwRccBSlATEuofDUoX5qycYeUoEU6c1d8CQRbk423cGIs3hWqQjRKZVhKX1K+/eyMJX7eyjYLY9+j1uZYxBk3e0038FAXmjegOrGbIUEQ5LdRZCLrKoWwT0kXGA+qR67qMo3PgnfgSr7tXqduGwVAdThplB6AcO8PnEUQFDDgEeVYx1VBFizDHCuMH/ESXls3sdOEegUWIxBJPMiFx2GZZe94rRJcu08O+rZ1LyPhR3rNdjEgygvIqyCEv1A46APMRx9FKC5wgUbiwt3YdHeVrvjJdaDIalk5D1F8dITqmYaSitoZDOAq8ugq9Qx7xgKxiWPrSf1Dz9GoUijn7ELHyOQCGuFTdyj2VAWWARtXIpLJ12h+2Pd6k6+lOx904GRDuzFSYpL6kXXCQjFRY6y7HN7xyC2dSa2aaX7ZR+66kmxe1km/ehHalSYjEkdC4srsp2wUO8k6MajOsdk9jdrDGdznaJ6coZTp9/Wr8F9bRKSSecj0ANN8M/NhMMS8FkRmm92Uy1hT8JhTglGSnABJZYDFFPm1dj4/k2zVBYqh/HlQyPmgITedV09+gBTm15J5wrAWXhJ01EWOq4gR+3eEzR0XwIGdQd6+e/ldRTnT//rwgRljpHkq4e7T7MhD1agj7+jqJrAqWCWBKKgCv/IATD0tENejC1p6kV/qe+5ODWXg+A74iiLJSlCIalNwRX3ejshKC5cjLdLhDslHjC2RPa6inLiczFYcR8OeXRI48oP3/TQqUZyMxgCFxmUq8yk8pCCYLEXxNJPlf7y1ozsvvcWRPn+EKnO7egN0tM6slDzGoXw2Fpw9pgKibummdnr4mfZ4I+wy8ohlw5xnRXWu06UFMKHCvrtrCu2MwHs66xTfzlshrHacc0p6AX1wa+Y0LG4cVtZ8tM6vUbyEzR6ytsIY4VzVuL6a5pz39edw5/Xlc/NvJf45X4TkgLjGZusxLrQvdiPhm/vTx8Hv7HXwx6/5n/8QkhhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIuYV/AfOAgi91tTC1AAAAAElFTkSuQmCC"
              alt=""
              width="50px"
              height="30px"
            />
          </div>
          <div className={classes.payment}>
            <FormControlLabel
              value="Mastercard"
              control={<Radio />}
              label="Mastercard"
            ></FormControlLabel>
            <img
              src="data:image/jpeg;base64,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"
              alt=""
              width="30px"
              height="20px"
            />
          </div>
        </RadioGroup>
      </FormControl>
    </div>
  );
}

export default PaymentChoose;
