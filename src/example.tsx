import {
	QueryClientProvider,
	QueryClient as TanstackQueryClient,
} from "@tanstack/react-query";
import { ManagedRuntime } from "effect";
import { toast } from "sonner";
import { createEffectQuery } from ".";
import { QueryClient } from "./query-client";
import { ToastConfigContext } from "./toast-config";

const queryClient = new TanstackQueryClient({
	defaultOptions: {
		mutations: {
			onError: (error) => {
				toast.error(error.message);
			},
		},
	},
});

const runtime = ManagedRuntime.make(QueryClient.make(queryClient));

const {
	useEffectMutation,
	useEffectQuery,
	useEffectInfiniteQuery,
	effectfulQueryOptions,
	RuntimeProvider,
} = createEffectQuery(runtime);

export {
	useEffectMutation,
	useEffectQuery,
	useEffectInfiniteQuery,
	effectfulQueryOptions,
};

export const EffectQueryProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	return (
		<QueryClientProvider client={queryClient}>
			<ToastConfigContext.Provider value={{ toast }}>
				<RuntimeProvider value={runtime}>{children}</RuntimeProvider>
			</ToastConfigContext.Provider>
		</QueryClientProvider>
	);
};
