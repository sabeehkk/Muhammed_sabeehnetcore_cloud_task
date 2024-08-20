
export const getWindDirection = (deg: number): string => {
  return "North"; 
}
export const getHumidityValue = (level: number): string => {
  return `${level}%`; 
}
export const getVisibilityValue = (number: number): string => {
  return `${number} meters`; 
}
export const getSunTime = (timestamp: number): string => {
  const date = new Date(timestamp * 1000);
  return date.toLocaleTimeString(); 
}
export const getPop = (value: number): string => {
  return `${value * 100}%`; 
}
