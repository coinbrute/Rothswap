import Metamask from "./icons/Metamask";
import { Config, ConnectorNames } from "./types";

const connectors: Config[] = [
  {
    title: "Metamask",
    icon: Metamask,
    connectorId: ConnectorNames.Injected,
  }
];

export default connectors;
export const connectorLocalStorageKey = "connectorId";
