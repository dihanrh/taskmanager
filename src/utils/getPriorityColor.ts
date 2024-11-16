export const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "Low":
        return "bg-green-400 text-white";
      case "Medium":
        return "bg-blue-400 text-white";
      case "High":
        return "bg-red-400 text-white";
      default:
        return "bg-gray-400 text-white";
    }
  };