import BranchData from './main.js';

export default class ClassData extends BranchData {
    private year?: number;
    private className?: string;
    private profileName?: string;

    constructor(wholeName: string, link: string) {
        super(wholeName, link);
    }
    override generateClassName(): this {
        if (this.wholeName.indexOf(" ") == -1) return this;

        const classNameEnd = this.wholeName.indexOf(" ")
        this.className = this.wholeName.substring(0, classNameEnd);

        return this;
    }

    override generateProfileName(): this {
        if (this.wholeName.indexOf(" ") == -1) return this;

        // Adding 2 because the profile name is like: 2informatyk so as to delete the 2 in front
        const profileNameStart = this.wholeName.indexOf(" ") + 2;
        this.profileName = this.wholeName.substring(profileNameStart);

        return this;
    }

    override generateYear(): this {
        if (this.wholeName.indexOf(" ") == -1) return this;

        const yearStart = this.wholeName.indexOf(" ") + 1;
        const yearEnd = yearStart + 1;
        const year = Number(this.wholeName.substring(yearStart, yearEnd))
        if (isNaN(year)) {
            return this;
        }

        this.year = year;
        return this;
    }
}