import type { QueryClient as TanstackQueryClient } from "@tanstack/react-query";
import { Effect, Layer, type ManagedRuntime } from "effect";

export type LiveLayerType = Layer.Layer<QueryClient>;

export type LiveManagedRuntime = ManagedRuntime.ManagedRuntime<
  Layer.Layer.Success<LiveLayerType>,
  never
>;
export type LiveRuntimeContext =
  ManagedRuntime.ManagedRuntime.Context<LiveManagedRuntime>;

export class QueryClient extends Effect.Tag("QueryClient")<
  QueryClient,
  TanstackQueryClient
>() {
  public static readonly make = (queryClient: TanstackQueryClient) =>
    Layer.succeed(this, this.of(queryClient));
}
