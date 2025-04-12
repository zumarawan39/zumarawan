"use client";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import store from "@/store";


// Create the persistor outside of the component
const persistor = persistStore(store);

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // Use useMemo to ensure the `persistor` is only created once
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        {children}
      </PersistGate>
    </Provider>
  );
}
