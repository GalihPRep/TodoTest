const TodoStyles = {
  button: {
    marginLeft: "4px",
    marginRight: "4px",
  },
  category: {
    alignItems: "center",
    backgroundColor: "#8080FF",
    borderRadius: "4px",
    display: "flex",
    height: "50%",
    marginLeft: "8px",
    paddingBottom: "4px",
    paddingLeft: "8px",
    paddingRight: "8px",
    paddingTop: "4px",
    justifyContent: "center",
  },
  input: {
    create: {
      marginRight: "8px",
    },
    update: {
      borderColor: "transparent",
      borderRadius: "4px",
      marginBottom: "12px",
      marginRight: "8px",
      marginTop: "12px",
      textAlign: "left",
      textDecoration: "none",
      width: "100%",
    },
  },
  item: {
    alignItems: "center",
    backgroundColor: "#E0E0FF",
    borderRadius: "8px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: "16px",
    paddingLeft: "16px",
    paddingRight: "16px",
    width: "50%",
  },
  menu: {
    display: "flex",
    margin: "16px",
    width: "50%"
  },
  name: {
    checked: {
      color: "#A0A0C0",
      marginBottom: "4px",
      marginTop: "4px",
      paddingBottom: "8px",
      paddingTop: "8px",
      textAlign: "left",
      textDecoration: "line-through",
      width: "100%",
    },
    unchecked: {
      marginBottom: "4px",
      marginTop: "4px",
      paddingBottom: "8px",
      paddingTop: "8px",
      textAlign: "left",
      textDecoration: "none",
      width: "100%",
    },
  },
};

export default TodoStyles;
