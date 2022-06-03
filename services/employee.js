module.exports = ({ EmployeeModel, EmployeeTypeModel }) => {
    const find = async (ID) => EmployeeModel.findOne({
        where: {
            ID
        },
        include: [{
            model: EmployeeTypeModel,
            required: true
        }]
    });

    const remove = (ID) => {
        return EmployeeModel.destroy({
            where: {
                ID
            }
        });
    }
    const save = async (ID, body) => {

        if (!ID) {
            body.EmployementDate = new Date();

            const saved = await EmployeeModel.create(body);
            return saved
        }

        delete body.EmployementDate
        const saved = await EmployeeModel.update(body, {
            where: { ID }
        });
        return saved

    }

    return {
        find,
        remove,
        save
    }
}