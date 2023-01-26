function(properties, context) {
    
    const metadata = Object.keys(properties)
        .filter((key) => key.startsWith("field"))
        .reduce((acc, key) => {
            const valueKey = key.replace("field", "value");
            const value = properties[valueKey];
            const field = properties[key];

            if (!field) return acc;

            return { ...acc, [field]: value };

        }, {});

	window.Logspot.track({
      event: properties.event_name,
      metadata: metadata
    });

}