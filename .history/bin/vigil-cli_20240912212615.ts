


#!/usr/bin/env node

import { preProcessFile } from "typescript"
import { Core } from "../packages/core"
const args  = process.argv.slice(2);
const testName =args[0] || 'default-test'