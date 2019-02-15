import { override } from '@microsoft/decorators';
import { Log } from '@microsoft/sp-core-library';
import {
  BaseListViewCommandSet,
  Command,
  IListViewCommandSetListViewUpdatedParameters,
  IListViewCommandSetExecuteEventParameters
} from '@microsoft/sp-listview-extensibility';

import * as strings from 'RibbonOnlineCommandSetStrings';
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { RibbonHelper } from './RibbonHelper';
import { IRibbonProps, Ribbon } from './components/Ribbon';

/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface IRibbonOnlineCommandSetProperties {
  // This is an example; replace with your own properties
  sampleTextOne: string;
  sampleTextTwo: string;
}

const LOG_SOURCE: string = 'RibbonOnlineCommandSet';

export default class RibbonOnlineCommandSet extends BaseListViewCommandSet<IRibbonOnlineCommandSetProperties> {
  private isRibbonVisible: boolean;

  @override
  public onInit(): Promise<void> {
    Log.info(LOG_SOURCE, 'Initialized RibbonOnlineCommandSet');
    return Promise.resolve();
  }

  @override
  public onListViewUpdated(event: IListViewCommandSetListViewUpdatedParameters): void {
    const ribbonCommand: Command = this.tryGetCommand('COMMAND_RIBBON');
    if (ribbonCommand) {
      ribbonCommand.visible = event.selectedRows.length >= 0;
    }
  }

  @override
  public onExecute(event: IListViewCommandSetExecuteEventParameters): void {
    switch (event.itemId) {
      case 'COMMAND_RIBBON':
      const commandName = this.context.manifest.items[event.itemId].title.default;
      this.showHideRibbon(commandName);
        break;
      default:
        throw new Error('Unknown command');
    }
  }

  
  private showHideRibbon(elementName: string) {
    const element: HTMLElement = document.querySelector(`button[name="${elementName}"]`) as HTMLElement;
    const commandBar: React.ReactElement<IRibbonProps> = React.createElement(
      Ribbon, {element: element, dismiss: this.dismiss.bind(this), elementName: elementName}
    );
      
    if(!this.isRibbonVisible)
    {
      //document.querySelector(`button[name="${elementName}"]`) as HTMLElement
      ReactDom.render(commandBar, RibbonHelper.appendRibbon(document.querySelector('.od-Files-topBar') as HTMLElement));
      this.isRibbonVisible = !this.isRibbonVisible;
    }
    else
    {
      RibbonHelper.clearRibbon();
      this.isRibbonVisible = !this.isRibbonVisible;
    }
  }

  private dismiss() {
    RibbonHelper.clearRibbon();
    this.isRibbonVisible = false;
  }
}
