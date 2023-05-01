import { getCompany, setCompany } from "../company";
import { Company } from "../../types";

export const addUnlockedCharacter = async (
  character: string,
  companyName: string
): Promise<void> => {
  if (character.length > 1)
    throw new Error("Character must not exceed length of 1.");

  const company: Company | null = await getCompany(companyName);
  if (!company)
    throw new Error("Cannot add character to company that does not exist.");

  company.unlockedCharacters.push(character);
  await setCompany(companyName, company);
};

export const getUnlockedCharacters = async (
  companyName: string
): Promise<string[]> => {
  const company: Company | null = await getCompany(companyName);
  if (!company)
    throw new Error(
      "Cannot fetch characters from company that does not exist."
    );

  return company.unlockedCharacters;
};
