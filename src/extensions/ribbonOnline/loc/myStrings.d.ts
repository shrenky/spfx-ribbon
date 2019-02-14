declare interface IRibbonOnlineCommandSetStrings {
  Command1: string;
  Command2: string;
}

declare module 'RibbonOnlineCommandSetStrings' {
  const strings: IRibbonOnlineCommandSetStrings;
  export = strings;
}
