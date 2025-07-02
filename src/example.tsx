import { QueryClient as TanstackQueryClient } from "@tanstack/react-query";
import { Layer, ManagedRuntime } from "effect";
import { toast } from "sonner";
import { createEffectQuery } from ".";
import { QueryClient } from "./runtime";

const queryClient = new TanstackQueryClient({
  defaultOptions: {
    mutations: {
      onError: (error) => {
        toast.error(error.message);
      },
    },
  },
});

const config = {
  toast,
};

const runtime = ManagedRuntime.make(QueryClient.make(queryClient));

const {
  useEffectMutation,
  useEffectQuery,
  useEffectInfiniteQuery,
  effectfulQueryOptions,
} = createEffectQuery(runtime);
