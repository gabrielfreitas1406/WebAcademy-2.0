export function toUpper(str: string): string {return str.toUpperCase();}
import {Prof}  from './helpersTypes';
import { Technologies } from './helpersTypes';

export function listProf(profs:Prof[]): string{
    const list = profs.map(prof => `<li>${prof.nome} - ${prof.sala}</li>`).join("\n");
    return `<ul>${list}</ul>`;
}

export function listTec(technologies: Technologies[]): string {
    const filteredTechnologies = technologies.filter(tech => tech.poweredByNodejs);
    const list = filteredTechnologies.map(tech => `<li>${tech.name} - ${tech.type}</li>`).join("\n");
    return `<ul>${list}</ul>`;
  }