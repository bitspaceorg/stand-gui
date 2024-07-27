export interface Metrics {
  hostname: string;
  username: string;
  cpuCount: number;
  os: string;
  memory: {
    totalMemory: number;
    usedMemory: number;
  };
  disk: {
    totalDisk: number;
    usedDisk: number;
  };
  upTime: string;
  maxProcs: number;
  network: any;
}
