
const functions = {
    
    size: (num) => {
        if (num < 10) return "small";
        if (num < 20) return "medium";
        if (num >= 20) return "large";
        if (num > 100) return "extra large";         
    },

    
};

export default functions;
