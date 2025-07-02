import type { QueryClient as TanstackQueryClient } from "@tanstack/react-query";
import { Effect, Layer } from "effect";

export class QueryClient extends Effect.Tag("QueryClient")<
	QueryClient,
	TanstackQueryClient
>() {
	public static readonly make = (queryClient: TanstackQueryClient) =>
		Layer.succeed(this, this.of(queryClient));
}
