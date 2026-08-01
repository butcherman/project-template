import { faker } from "@faker-js/faker";

export const useSampleData = () => {
    const sampleList = (recordCount: number) => {
        let list = [];

        for (let i = 0; i < recordCount; i++) {
            list.push({
                name: faker.person.fullName(),
                username: faker.internet.username(),
                email: faker.internet.email(),
            });
        }

        return list;
    };

    return {
        sampleList,
    };
};
