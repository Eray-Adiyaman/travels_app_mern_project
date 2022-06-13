import { TextField, Grid, IconButton, InputAdornment} from "@mui/material"
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'; 

export default function Input({ name, handleChange, label, autoFocus,  type, handleShowPassword, half }) {
  return (
        <Grid item xs={12} sm={half? 6 : 12}>
            <TextField 
                name={name}
                onChange={handleChange}
                variant="outlined"
                autoComplete="on" //without this console was showing an error saying "Input elements should have autocomplete attributes (suggested: "current-password")"
                required
                fullWidth
                label={label}
                autoFocus={autoFocus}
                type={type}
                InputProps={name === "password" ? /*this input field required truhty value and gave a console error for not being a boolean so i changed && to ? : turnery operators to get rid of the error message */ {
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton onClick={handleShowPassword}>
                                {type === "password" ? <VisibilityIcon /> : <VisibilityOffIcon />}
                            </IconButton>
                        </InputAdornment>
                    )
                } : null}
            />
        </Grid>
    )

}
