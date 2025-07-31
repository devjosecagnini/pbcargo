import packageJson from '../package.json';
import { PBCargo } from './command/pbcargo/pb-cargo';

const pbCargo = PBCargo.createPBCargo(PBCargo.parsePackageJSONToPBCargoOptions(packageJson))

pbCargo.parse()
