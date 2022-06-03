module.exports = ({ ShopModel, EmployeeModel, EmployeeTypeModel }) => {
    const find = async (ID) => ShopModel.findOne({
        where: {
            ID
        },
        include: [{
            model: EmployeeModel,
            required: true,
            include: [{
                model: EmployeeTypeModel,
                required: true,
            }]
        }]
    });

    const remove = (ID) => {
        return ShopModel.destroy({
            where: {
                ID
            }
        });
    }
    const save = async (ID, body) => {

        if (!ID) {
            body.EmployementDate = new Date();

            const saved = await ShopModel.create(body);
            return saved
        }

        delete body.EmployementDate
        const saved = await ShopModel.update(body, {
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