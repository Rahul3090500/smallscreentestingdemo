export const changeText = (stringCode: string, wrapper: { data: any; }) => {
    const data = wrapper?.data; // Extract the array from the wrapper object
    if (!data || !Array.isArray(data)) {
      console.error("Invalid or missing 'data' array in changeText");
      return null; // Or an empty string depending on your preference
    }
  
    const foundItem = data.find((item) => item.stringCode === stringCode);
  
    return foundItem ? foundItem.stringValue : null; // Return null if no match is found
  };
  