#!/opt/homebrew/opt/node/bin/node
import * as cdk from 'aws-cdk-lib/core';
import { TraceabilityStack } from '../lib/traceability-stack';
import { PinkFluffyUnicornsDancingOnRainbowsStack } from '../lib/PinkFluffyUnicornsDancingOnRainbows-stack';

const app = new cdk.App();
new TraceabilityStack(app, 'TraceabilityStack', {});
new PinkFluffyUnicornsDancingOnRainbowsStack(app, 'PinkFluffyUnicornsDancingOnRainbowsStack', {});

