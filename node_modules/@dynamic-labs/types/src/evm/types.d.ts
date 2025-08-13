export type IEVMTransaction = {
    from: string;
    to: string;
    value: bigint;
    data?: string;
    gas?: bigint;
};
export type KernelAccountSettings = {
    entryPoint: {
        address: string;
        version: string;
    };
    chainId: number;
    ecdsaProviderType: string | null;
    kernelVersion: string;
    projectId: string;
    enableEIP7702: boolean | void;
};
