import { deepPurple } from "@mui/material/colors";

const styles = {
    appBar:{
        borderRadius: 15,
        margin:"30px 0",
        display:"flex",
        flexDirection: "row",
        justifyContent:"center",
        alignItems:"center",
    },
    heading:{
        color: "rgba(0,183,255,1)",
        textDecoration:"none"
      },
    image:{
        marginLeft:"20px",
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '400px',
      },
      profile: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '300px',
      },
      userName: {
        display: 'flex',
        alignItems: 'center',
      },
      brandContainer: {
        display: 'flex',
        alignItems: 'center',
        width: "550px"
      },
      purple: {
        color: deepPurple[500],
        backgroundColor: deepPurple[500],
      },
 }

 export default styles;