import React from 'react';
import { 
  Database, 
  Cloud, 
  Bot, 
  Lock, 
  LineChart, 
  Cpu, 
  Network, 
  MessageSquare,
  Boxes,
  GitBranch,
  Webhook,
  Search
} from 'lucide-react';

const integrationCategories = [
  {
    title: 'Monitoring & Analytics',
    items: [
      {
        name: 'Datadog',
        description: 'Full-stack observability and log management',
        icon: 'https://www.vectorlogo.zone/logos/datadoghq/datadoghq-icon.svg',
        status: 'Connected',
        type: 'Monitoring'
      },
      {
        name: 'New Relic',
        description: 'Application performance monitoring and diagnostics',
        icon: 'https://www.vectorlogo.zone/logos/newrelic/newrelic-icon.svg',
        status: 'Connected',
        type: 'APM'
      },
      {
        name: 'Grafana',
        description: 'Metrics visualization and alerting',
        icon: 'https://www.vectorlogo.zone/logos/grafana/grafana-icon.svg',
        status: 'Active',
        type: 'Visualization'
      },
      {
        name: 'Prometheus',
        description: 'Time series monitoring and alerting',
        icon: 'https://www.vectorlogo.zone/logos/prometheusio/prometheusio-icon.svg',
        status: 'Connected',
        type: 'Monitoring'
      }
    ]
  },
  {
    title: 'Infrastructure & Cloud',
    items: [
      {
        name: 'AWS CloudWatch',
        description: 'Cloud resource and application monitoring',
        icon: 'https://www.vectorlogo.zone/logos/amazon_cloudwatch/amazon_cloudwatch-icon.svg',
        status: 'Connected',
        type: 'Cloud'
      },
      {
        name: 'Azure Monitor',
        description: 'Azure services monitoring and diagnostics',
        icon: 'https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg',
        status: 'Connected',
        type: 'Cloud'
      },
      {
        name: 'Google Cloud',
        description: 'GCP monitoring and operations',
        icon: 'https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg',
        status: 'Connected',
        type: 'Cloud'
      },
      {
        name: 'Kubernetes',
        description: 'Container orchestration monitoring',
        icon: 'https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg',
        status: 'Active',
        type: 'Container'
      }
    ]
  },
  {
    title: 'Databases',
    items: [
      {
        name: 'MongoDB',
        description: 'NoSQL database monitoring',
        icon: 'https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg',
        status: 'Connected',
        type: 'Database'
      },
      {
        name: 'PostgreSQL',
        description: 'Relational database monitoring',
        icon: 'https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg',
        status: 'Connected',
        type: 'Database'
      },
      {
        name: 'Redis',
        description: 'In-memory data store monitoring',
        icon: 'https://www.vectorlogo.zone/logos/redis/redis-icon.svg',
        status: 'Active',
        type: 'Database'
      },
      {
        name: 'Elasticsearch',
        description: 'Search engine monitoring',
        icon: 'https://www.vectorlogo.zone/logos/elastic/elastic-icon.svg',
        status: 'Connected',
        type: 'Database'
      }
    ]
  },
  {
    title: 'Customer Support & Experience',
    items: [
      {
        name: 'Zendesk',
        description: 'Customer support and ticket management',
        icon: 'https://www.vectorlogo.zone/logos/zendesk/zendesk-icon.svg',
        status: 'Connected',
        type: 'Support'
      },
      {
        name: 'Intercom',
        description: 'Customer messaging and engagement',
        icon: 'https://www.vectorlogo.zone/logos/intercom/intercom-icon.svg',
        status: 'Active',
        type: 'Support'
      },
      {
        name: 'Gainsight',
        description: 'Customer success management',
        icon: MessageSquare,
        status: 'Connected',
        type: 'Success'
      },
      {
        name: 'Freshdesk',
        description: 'Help desk and customer support',
        icon: 'https://www.vectorlogo.zone/logos/freshdesk/freshdesk-icon.svg',
        status: 'Connected',
        type: 'Support'
      }
    ]
  },
  {
    title: 'Error Tracking & Logging',
    items: [
      {
        name: 'Sentry',
        description: 'Real-time error tracking and monitoring',
        icon: 'https://www.vectorlogo.zone/logos/getsentry/getsentry-icon.svg',
        status: 'Connected',
        type: 'Error Tracking'
      },
      {
        name: 'ELK Stack',
        description: 'Log management and analysis',
        icon: 'https://www.vectorlogo.zone/logos/elastic/elastic-icon.svg',
        status: 'Connected',
        type: 'Logging'
      },
      {
        name: 'Splunk',
        description: 'Machine data analytics and monitoring',
        icon: 'https://www.vectorlogo.zone/logos/splunk/splunk-icon.svg',
        status: 'Active',
        type: 'Analytics'
      },
      {
        name: 'Logstash',
        description: 'Log collection and processing',
        icon: 'https://www.vectorlogo.zone/logos/elasticco_logstash/elasticco_logstash-icon.svg',
        status: 'Connected',
        type: 'Logging'
      }
    ]
  },
  {
    title: 'AI & Machine Learning',
    items: [
      {
        name: 'TensorFlow',
        description: 'ML model monitoring and analytics',
        icon: 'https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg',
        status: 'Connected',
        type: 'ML'
      },
      {
        name: 'OpenAI',
        description: 'AI-powered issue analysis and resolution',
        icon: Bot,
        status: 'Active',
        type: 'AI'
      },
      {
        name: 'Hugging Face',
        description: 'NLP models for log analysis',
        icon: MessageSquare,
        status: 'Connected',
        type: 'AI'
      },
      {
        name: 'PyTorch',
        description: 'Deep learning framework monitoring',
        icon: 'https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg',
        status: 'Connected',
        type: 'ML'
      }
    ]
  }
];

export function Integrations() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Integrations</h1>
          <p className="text-gray-600 mt-1">Connect your tools and services for comprehensive monitoring</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center space-x-2">
          <Webhook className="w-4 h-4" />
          <span>Add Integration</span>
        </button>
      </div>

      <div className="space-y-8">
        {integrationCategories.map((category, categoryIndex) => (
          <div key={categoryIndex}>
            <h2 className="text-lg font-medium text-gray-900 mb-4">{category.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.items.map((integration, index) => (
                <div key={index} className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-gray-50 rounded-lg flex-shrink-0">
                      {typeof integration.icon === 'string' ? (
                        <img 
                          src={integration.icon} 
                          alt={integration.name} 
                          className="w-8 h-8"
                        />
                      ) : (
                        <integration.icon className="w-8 h-8 text-blue-600" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-medium text-gray-900">
                          {integration.name}
                        </h3>
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          integration.status === 'Connected' 
                            ? 'bg-green-50 text-green-600'
                            : 'bg-blue-50 text-blue-600'
                        }`}>
                          {integration.status}
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-gray-600">
                        {integration.description}
                      </p>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-xs font-medium text-gray-500">
                          {integration.type}
                        </span>
                        <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                          Configure
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}