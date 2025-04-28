import { BaseResource, BaseProperty } from 'adminjs';

class PageResource extends BaseResource {
    id() {
        return 'PageResource';
    }

    properties() {
        return [
            new BaseProperty({ path: 'title', type: 'string' }),
        ];
    }
}

function createPageResource({ name, navigation, component, handler }) {
    const resource = new PageResource()
    return {
        resource,
        options: {
            id: name,
            navigation,
            actions: {
                list: {
                    isAccessible: true,
                    showFilter: false,
                    component,
                    handler,
                },
                new: { isVisible: false },
                edit: { isVisible: false },
                show: { isVisible: false },
                delete: { isVisible: false },
            },
        },
    };
}

export default createPageResource;