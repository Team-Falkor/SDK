import { PluginContext, PluginMetadata } from "../@types";

// Define the context interface for dependencies

export abstract class BasePlugin {
  protected api: PluginContext;

  // Metadata for the plugin
  abstract readonly metadata: PluginMetadata;

  constructor(context: PluginContext) {
    this.api = context;
  }

  /**
   * This method is responsible for initializing the plugin.
   * It is called when the plugin is registered with the plugin manager.
   *
   * @return {void} This function does not return anything.
   */
  abstract initialize(): void;

  /**
   * This method is responsible for cleaning up and destroying the plugin.
   * It is called when the plugin is unregistered from the plugin manager.
   *
   * @return {void} This function does not return anything.
   */
  abstract destroy(): void;
}
