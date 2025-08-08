export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("appState");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error("Could not load state", err);
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const stateToSave = {
      ...state,
    };
    const serializedState = JSON.stringify(stateToSave);
    localStorage.setItem("appState", serializedState);
  } catch (err) {
    console.error("Could not save state", err);
  }
};
