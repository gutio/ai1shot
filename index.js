const core = require('@actions/core');
const { OpenAIClient, AzureKeyCredential } = require("@azure/openai");

const endpoint = core.getInput('endpoint');
const azureApiKey = core.getInput('key');
const deploymentId = core.getInput('model');
const messages =
    [
        {role: "system", content: core.getInput('system_message') },
        {role: "user", content: core.getInput('user_message') }
    ];

async function main() {
    const client = new OpenAIClient(endpoint, new AzureKeyCredential(azureApiKey));
    const result = await client.getChatCompletions(deploymentId, messages);
    console.log(result.choices[0].message.content);
    core.setOutput("result_assistant_message", result.choices[0].message.content);
    core.setOutput("result_json_raw", result);
}

main().catch((err) => {
    core.setFailed(err.message);
});
