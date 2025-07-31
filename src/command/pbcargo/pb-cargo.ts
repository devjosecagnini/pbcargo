import PBCargoCommand from '../../core/pb-cargo-command';
import { PackageJsonPBCargo } from '../../types/package-json';
import { PBCargoOptions } from './pb-cargo.types';
import figlet from 'figlet';

export class PBCargo extends PBCargoCommand {
	private constructor() {
		super();
	}

	static createPBCargo(options: PBCargoOptions): PBCargo {
		const pbCargo = new PBCargo();

		pbCargo
			.name(options.name)
			.description(options.description)
			.version(options.version)
			.action(() => {
				const text = figlet.textSync('hellooooo');
				console.log(text);
			});

		return pbCargo;
	}

	static parsePackageJSONToPBCargoOptions(
		packageJson: PackageJsonPBCargo
	): PBCargoOptions {
		return {
			name: packageJson.name,
			description: packageJson.description,
			version: packageJson.version,
		};
	}
}
