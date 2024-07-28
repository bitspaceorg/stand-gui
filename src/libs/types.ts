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

export interface Step {
  name: string;
  command: string;
}

export interface Env {
  name: string;
  value: string;
}

export interface RepoResponse {
  repos: string[];
}
